'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8476<T> = T extends (infer U)[]
  ? DeepReadonlyArray8476<U>
  : T extends object
  ? DeepReadonlyObject8476<T>
  : T;

interface DeepReadonlyArray8476<T> extends ReadonlyArray<DeepReadonly8476<T>> {}

type DeepReadonlyObject8476<T> = {
  readonly [P in keyof T]: DeepReadonly8476<T[P]>;
};

type UnionToIntersection8476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8476<T> = UnionToIntersection8476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8476<T extends unknown[], V> = [...T, V];

type TuplifyUnion8476<T, L = LastOf8476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8476<TuplifyUnion8476<Exclude<T, L>>, L>;

type DeepPartial8476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8476<T[P]> }
  : T;

type Paths8476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8476<K, Paths8476<T[K], Prev8476[D]>> : never }[keyof T]
  : never;

type Prev8476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8476 {
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

type ConfigPaths8476 = Paths8476<NestedConfig8476>;

interface HeavyProps8476 {
  config: DeepPartial8476<NestedConfig8476>;
  path?: ConfigPaths8476;
}

const HeavyComponent8476 = memo(function HeavyComponent8476({ config }: HeavyProps8476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8476.displayName = 'HeavyComponent8476';
export default HeavyComponent8476;
