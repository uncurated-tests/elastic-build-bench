'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8280<T> = T extends (infer U)[]
  ? DeepReadonlyArray8280<U>
  : T extends object
  ? DeepReadonlyObject8280<T>
  : T;

interface DeepReadonlyArray8280<T> extends ReadonlyArray<DeepReadonly8280<T>> {}

type DeepReadonlyObject8280<T> = {
  readonly [P in keyof T]: DeepReadonly8280<T[P]>;
};

type UnionToIntersection8280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8280<T> = UnionToIntersection8280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8280<T extends unknown[], V> = [...T, V];

type TuplifyUnion8280<T, L = LastOf8280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8280<TuplifyUnion8280<Exclude<T, L>>, L>;

type DeepPartial8280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8280<T[P]> }
  : T;

type Paths8280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8280<K, Paths8280<T[K], Prev8280[D]>> : never }[keyof T]
  : never;

type Prev8280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8280 {
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

type ConfigPaths8280 = Paths8280<NestedConfig8280>;

interface HeavyProps8280 {
  config: DeepPartial8280<NestedConfig8280>;
  path?: ConfigPaths8280;
}

const HeavyComponent8280 = memo(function HeavyComponent8280({ config }: HeavyProps8280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8280.displayName = 'HeavyComponent8280';
export default HeavyComponent8280;
