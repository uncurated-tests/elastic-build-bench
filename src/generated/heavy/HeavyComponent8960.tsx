'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8960<T> = T extends (infer U)[]
  ? DeepReadonlyArray8960<U>
  : T extends object
  ? DeepReadonlyObject8960<T>
  : T;

interface DeepReadonlyArray8960<T> extends ReadonlyArray<DeepReadonly8960<T>> {}

type DeepReadonlyObject8960<T> = {
  readonly [P in keyof T]: DeepReadonly8960<T[P]>;
};

type UnionToIntersection8960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8960<T> = UnionToIntersection8960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8960<T extends unknown[], V> = [...T, V];

type TuplifyUnion8960<T, L = LastOf8960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8960<TuplifyUnion8960<Exclude<T, L>>, L>;

type DeepPartial8960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8960<T[P]> }
  : T;

type Paths8960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8960<K, Paths8960<T[K], Prev8960[D]>> : never }[keyof T]
  : never;

type Prev8960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8960 {
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

type ConfigPaths8960 = Paths8960<NestedConfig8960>;

interface HeavyProps8960 {
  config: DeepPartial8960<NestedConfig8960>;
  path?: ConfigPaths8960;
}

const HeavyComponent8960 = memo(function HeavyComponent8960({ config }: HeavyProps8960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8960.displayName = 'HeavyComponent8960';
export default HeavyComponent8960;
