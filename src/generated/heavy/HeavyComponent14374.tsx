'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14374<T> = T extends (infer U)[]
  ? DeepReadonlyArray14374<U>
  : T extends object
  ? DeepReadonlyObject14374<T>
  : T;

interface DeepReadonlyArray14374<T> extends ReadonlyArray<DeepReadonly14374<T>> {}

type DeepReadonlyObject14374<T> = {
  readonly [P in keyof T]: DeepReadonly14374<T[P]>;
};

type UnionToIntersection14374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14374<T> = UnionToIntersection14374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14374<T extends unknown[], V> = [...T, V];

type TuplifyUnion14374<T, L = LastOf14374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14374<TuplifyUnion14374<Exclude<T, L>>, L>;

type DeepPartial14374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14374<T[P]> }
  : T;

type Paths14374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14374<K, Paths14374<T[K], Prev14374[D]>> : never }[keyof T]
  : never;

type Prev14374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14374 {
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

type ConfigPaths14374 = Paths14374<NestedConfig14374>;

interface HeavyProps14374 {
  config: DeepPartial14374<NestedConfig14374>;
  path?: ConfigPaths14374;
}

const HeavyComponent14374 = memo(function HeavyComponent14374({ config }: HeavyProps14374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14374.displayName = 'HeavyComponent14374';
export default HeavyComponent14374;
