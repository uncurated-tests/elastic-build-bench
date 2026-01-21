'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8564<T> = T extends (infer U)[]
  ? DeepReadonlyArray8564<U>
  : T extends object
  ? DeepReadonlyObject8564<T>
  : T;

interface DeepReadonlyArray8564<T> extends ReadonlyArray<DeepReadonly8564<T>> {}

type DeepReadonlyObject8564<T> = {
  readonly [P in keyof T]: DeepReadonly8564<T[P]>;
};

type UnionToIntersection8564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8564<T> = UnionToIntersection8564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8564<T extends unknown[], V> = [...T, V];

type TuplifyUnion8564<T, L = LastOf8564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8564<TuplifyUnion8564<Exclude<T, L>>, L>;

type DeepPartial8564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8564<T[P]> }
  : T;

type Paths8564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8564<K, Paths8564<T[K], Prev8564[D]>> : never }[keyof T]
  : never;

type Prev8564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8564 {
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

type ConfigPaths8564 = Paths8564<NestedConfig8564>;

interface HeavyProps8564 {
  config: DeepPartial8564<NestedConfig8564>;
  path?: ConfigPaths8564;
}

const HeavyComponent8564 = memo(function HeavyComponent8564({ config }: HeavyProps8564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8564.displayName = 'HeavyComponent8564';
export default HeavyComponent8564;
