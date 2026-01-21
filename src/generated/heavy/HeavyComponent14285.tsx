'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14285<T> = T extends (infer U)[]
  ? DeepReadonlyArray14285<U>
  : T extends object
  ? DeepReadonlyObject14285<T>
  : T;

interface DeepReadonlyArray14285<T> extends ReadonlyArray<DeepReadonly14285<T>> {}

type DeepReadonlyObject14285<T> = {
  readonly [P in keyof T]: DeepReadonly14285<T[P]>;
};

type UnionToIntersection14285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14285<T> = UnionToIntersection14285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14285<T extends unknown[], V> = [...T, V];

type TuplifyUnion14285<T, L = LastOf14285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14285<TuplifyUnion14285<Exclude<T, L>>, L>;

type DeepPartial14285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14285<T[P]> }
  : T;

type Paths14285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14285<K, Paths14285<T[K], Prev14285[D]>> : never }[keyof T]
  : never;

type Prev14285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14285 {
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

type ConfigPaths14285 = Paths14285<NestedConfig14285>;

interface HeavyProps14285 {
  config: DeepPartial14285<NestedConfig14285>;
  path?: ConfigPaths14285;
}

const HeavyComponent14285 = memo(function HeavyComponent14285({ config }: HeavyProps14285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14285.displayName = 'HeavyComponent14285';
export default HeavyComponent14285;
