'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14063<T> = T extends (infer U)[]
  ? DeepReadonlyArray14063<U>
  : T extends object
  ? DeepReadonlyObject14063<T>
  : T;

interface DeepReadonlyArray14063<T> extends ReadonlyArray<DeepReadonly14063<T>> {}

type DeepReadonlyObject14063<T> = {
  readonly [P in keyof T]: DeepReadonly14063<T[P]>;
};

type UnionToIntersection14063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14063<T> = UnionToIntersection14063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14063<T extends unknown[], V> = [...T, V];

type TuplifyUnion14063<T, L = LastOf14063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14063<TuplifyUnion14063<Exclude<T, L>>, L>;

type DeepPartial14063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14063<T[P]> }
  : T;

type Paths14063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14063<K, Paths14063<T[K], Prev14063[D]>> : never }[keyof T]
  : never;

type Prev14063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14063 {
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

type ConfigPaths14063 = Paths14063<NestedConfig14063>;

interface HeavyProps14063 {
  config: DeepPartial14063<NestedConfig14063>;
  path?: ConfigPaths14063;
}

const HeavyComponent14063 = memo(function HeavyComponent14063({ config }: HeavyProps14063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14063.displayName = 'HeavyComponent14063';
export default HeavyComponent14063;
