'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly462<T> = T extends (infer U)[]
  ? DeepReadonlyArray462<U>
  : T extends object
  ? DeepReadonlyObject462<T>
  : T;

interface DeepReadonlyArray462<T> extends ReadonlyArray<DeepReadonly462<T>> {}

type DeepReadonlyObject462<T> = {
  readonly [P in keyof T]: DeepReadonly462<T[P]>;
};

type UnionToIntersection462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf462<T> = UnionToIntersection462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push462<T extends unknown[], V> = [...T, V];

type TuplifyUnion462<T, L = LastOf462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push462<TuplifyUnion462<Exclude<T, L>>, L>;

type DeepPartial462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial462<T[P]> }
  : T;

type Paths462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join462<K, Paths462<T[K], Prev462[D]>> : never }[keyof T]
  : never;

type Prev462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig462 {
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

type ConfigPaths462 = Paths462<NestedConfig462>;

interface HeavyProps462 {
  config: DeepPartial462<NestedConfig462>;
  path?: ConfigPaths462;
}

const HeavyComponent462 = memo(function HeavyComponent462({ config }: HeavyProps462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent462.displayName = 'HeavyComponent462';
export default HeavyComponent462;
