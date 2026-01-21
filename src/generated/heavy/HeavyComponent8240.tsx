'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8240<T> = T extends (infer U)[]
  ? DeepReadonlyArray8240<U>
  : T extends object
  ? DeepReadonlyObject8240<T>
  : T;

interface DeepReadonlyArray8240<T> extends ReadonlyArray<DeepReadonly8240<T>> {}

type DeepReadonlyObject8240<T> = {
  readonly [P in keyof T]: DeepReadonly8240<T[P]>;
};

type UnionToIntersection8240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8240<T> = UnionToIntersection8240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8240<T extends unknown[], V> = [...T, V];

type TuplifyUnion8240<T, L = LastOf8240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8240<TuplifyUnion8240<Exclude<T, L>>, L>;

type DeepPartial8240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8240<T[P]> }
  : T;

type Paths8240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8240<K, Paths8240<T[K], Prev8240[D]>> : never }[keyof T]
  : never;

type Prev8240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8240 {
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

type ConfigPaths8240 = Paths8240<NestedConfig8240>;

interface HeavyProps8240 {
  config: DeepPartial8240<NestedConfig8240>;
  path?: ConfigPaths8240;
}

const HeavyComponent8240 = memo(function HeavyComponent8240({ config }: HeavyProps8240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8240.displayName = 'HeavyComponent8240';
export default HeavyComponent8240;
