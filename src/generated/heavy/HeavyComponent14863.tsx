'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14863<T> = T extends (infer U)[]
  ? DeepReadonlyArray14863<U>
  : T extends object
  ? DeepReadonlyObject14863<T>
  : T;

interface DeepReadonlyArray14863<T> extends ReadonlyArray<DeepReadonly14863<T>> {}

type DeepReadonlyObject14863<T> = {
  readonly [P in keyof T]: DeepReadonly14863<T[P]>;
};

type UnionToIntersection14863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14863<T> = UnionToIntersection14863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14863<T extends unknown[], V> = [...T, V];

type TuplifyUnion14863<T, L = LastOf14863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14863<TuplifyUnion14863<Exclude<T, L>>, L>;

type DeepPartial14863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14863<T[P]> }
  : T;

type Paths14863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14863<K, Paths14863<T[K], Prev14863[D]>> : never }[keyof T]
  : never;

type Prev14863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14863 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14863 = Paths14863<NestedConfig14863>;

interface HeavyProps14863 {
  config: DeepPartial14863<NestedConfig14863>;
  path?: ConfigPaths14863;
}

const HeavyComponent14863 = memo(function HeavyComponent14863({ config }: HeavyProps14863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14863.displayName = 'HeavyComponent14863';
export default HeavyComponent14863;
