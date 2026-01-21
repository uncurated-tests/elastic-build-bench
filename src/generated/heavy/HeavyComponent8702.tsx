'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8702<T> = T extends (infer U)[]
  ? DeepReadonlyArray8702<U>
  : T extends object
  ? DeepReadonlyObject8702<T>
  : T;

interface DeepReadonlyArray8702<T> extends ReadonlyArray<DeepReadonly8702<T>> {}

type DeepReadonlyObject8702<T> = {
  readonly [P in keyof T]: DeepReadonly8702<T[P]>;
};

type UnionToIntersection8702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8702<T> = UnionToIntersection8702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8702<T extends unknown[], V> = [...T, V];

type TuplifyUnion8702<T, L = LastOf8702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8702<TuplifyUnion8702<Exclude<T, L>>, L>;

type DeepPartial8702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8702<T[P]> }
  : T;

type Paths8702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8702<K, Paths8702<T[K], Prev8702[D]>> : never }[keyof T]
  : never;

type Prev8702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8702 {
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

type ConfigPaths8702 = Paths8702<NestedConfig8702>;

interface HeavyProps8702 {
  config: DeepPartial8702<NestedConfig8702>;
  path?: ConfigPaths8702;
}

const HeavyComponent8702 = memo(function HeavyComponent8702({ config }: HeavyProps8702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8702.displayName = 'HeavyComponent8702';
export default HeavyComponent8702;
