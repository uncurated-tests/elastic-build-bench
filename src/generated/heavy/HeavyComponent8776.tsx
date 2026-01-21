'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8776<T> = T extends (infer U)[]
  ? DeepReadonlyArray8776<U>
  : T extends object
  ? DeepReadonlyObject8776<T>
  : T;

interface DeepReadonlyArray8776<T> extends ReadonlyArray<DeepReadonly8776<T>> {}

type DeepReadonlyObject8776<T> = {
  readonly [P in keyof T]: DeepReadonly8776<T[P]>;
};

type UnionToIntersection8776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8776<T> = UnionToIntersection8776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8776<T extends unknown[], V> = [...T, V];

type TuplifyUnion8776<T, L = LastOf8776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8776<TuplifyUnion8776<Exclude<T, L>>, L>;

type DeepPartial8776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8776<T[P]> }
  : T;

type Paths8776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8776<K, Paths8776<T[K], Prev8776[D]>> : never }[keyof T]
  : never;

type Prev8776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8776 {
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

type ConfigPaths8776 = Paths8776<NestedConfig8776>;

interface HeavyProps8776 {
  config: DeepPartial8776<NestedConfig8776>;
  path?: ConfigPaths8776;
}

const HeavyComponent8776 = memo(function HeavyComponent8776({ config }: HeavyProps8776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8776.displayName = 'HeavyComponent8776';
export default HeavyComponent8776;
