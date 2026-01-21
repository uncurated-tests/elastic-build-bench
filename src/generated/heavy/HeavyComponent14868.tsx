'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14868<T> = T extends (infer U)[]
  ? DeepReadonlyArray14868<U>
  : T extends object
  ? DeepReadonlyObject14868<T>
  : T;

interface DeepReadonlyArray14868<T> extends ReadonlyArray<DeepReadonly14868<T>> {}

type DeepReadonlyObject14868<T> = {
  readonly [P in keyof T]: DeepReadonly14868<T[P]>;
};

type UnionToIntersection14868<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14868<T> = UnionToIntersection14868<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14868<T extends unknown[], V> = [...T, V];

type TuplifyUnion14868<T, L = LastOf14868<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14868<TuplifyUnion14868<Exclude<T, L>>, L>;

type DeepPartial14868<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14868<T[P]> }
  : T;

type Paths14868<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14868<K, Paths14868<T[K], Prev14868[D]>> : never }[keyof T]
  : never;

type Prev14868 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14868<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14868 {
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

type ConfigPaths14868 = Paths14868<NestedConfig14868>;

interface HeavyProps14868 {
  config: DeepPartial14868<NestedConfig14868>;
  path?: ConfigPaths14868;
}

const HeavyComponent14868 = memo(function HeavyComponent14868({ config }: HeavyProps14868) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14868) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14868 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14868: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14868.displayName = 'HeavyComponent14868';
export default HeavyComponent14868;
