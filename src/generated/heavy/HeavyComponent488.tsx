'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly488<T> = T extends (infer U)[]
  ? DeepReadonlyArray488<U>
  : T extends object
  ? DeepReadonlyObject488<T>
  : T;

interface DeepReadonlyArray488<T> extends ReadonlyArray<DeepReadonly488<T>> {}

type DeepReadonlyObject488<T> = {
  readonly [P in keyof T]: DeepReadonly488<T[P]>;
};

type UnionToIntersection488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf488<T> = UnionToIntersection488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push488<T extends unknown[], V> = [...T, V];

type TuplifyUnion488<T, L = LastOf488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push488<TuplifyUnion488<Exclude<T, L>>, L>;

type DeepPartial488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial488<T[P]> }
  : T;

type Paths488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join488<K, Paths488<T[K], Prev488[D]>> : never }[keyof T]
  : never;

type Prev488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig488 {
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

type ConfigPaths488 = Paths488<NestedConfig488>;

interface HeavyProps488 {
  config: DeepPartial488<NestedConfig488>;
  path?: ConfigPaths488;
}

const HeavyComponent488 = memo(function HeavyComponent488({ config }: HeavyProps488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent488.displayName = 'HeavyComponent488';
export default HeavyComponent488;
