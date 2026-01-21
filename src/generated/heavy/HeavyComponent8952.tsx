'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8952<T> = T extends (infer U)[]
  ? DeepReadonlyArray8952<U>
  : T extends object
  ? DeepReadonlyObject8952<T>
  : T;

interface DeepReadonlyArray8952<T> extends ReadonlyArray<DeepReadonly8952<T>> {}

type DeepReadonlyObject8952<T> = {
  readonly [P in keyof T]: DeepReadonly8952<T[P]>;
};

type UnionToIntersection8952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8952<T> = UnionToIntersection8952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8952<T extends unknown[], V> = [...T, V];

type TuplifyUnion8952<T, L = LastOf8952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8952<TuplifyUnion8952<Exclude<T, L>>, L>;

type DeepPartial8952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8952<T[P]> }
  : T;

type Paths8952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8952<K, Paths8952<T[K], Prev8952[D]>> : never }[keyof T]
  : never;

type Prev8952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8952 {
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

type ConfigPaths8952 = Paths8952<NestedConfig8952>;

interface HeavyProps8952 {
  config: DeepPartial8952<NestedConfig8952>;
  path?: ConfigPaths8952;
}

const HeavyComponent8952 = memo(function HeavyComponent8952({ config }: HeavyProps8952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8952.displayName = 'HeavyComponent8952';
export default HeavyComponent8952;
