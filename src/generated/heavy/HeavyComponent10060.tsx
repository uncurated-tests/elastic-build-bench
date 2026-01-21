'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10060<T> = T extends (infer U)[]
  ? DeepReadonlyArray10060<U>
  : T extends object
  ? DeepReadonlyObject10060<T>
  : T;

interface DeepReadonlyArray10060<T> extends ReadonlyArray<DeepReadonly10060<T>> {}

type DeepReadonlyObject10060<T> = {
  readonly [P in keyof T]: DeepReadonly10060<T[P]>;
};

type UnionToIntersection10060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10060<T> = UnionToIntersection10060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10060<T extends unknown[], V> = [...T, V];

type TuplifyUnion10060<T, L = LastOf10060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10060<TuplifyUnion10060<Exclude<T, L>>, L>;

type DeepPartial10060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10060<T[P]> }
  : T;

type Paths10060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10060<K, Paths10060<T[K], Prev10060[D]>> : never }[keyof T]
  : never;

type Prev10060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10060 {
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

type ConfigPaths10060 = Paths10060<NestedConfig10060>;

interface HeavyProps10060 {
  config: DeepPartial10060<NestedConfig10060>;
  path?: ConfigPaths10060;
}

const HeavyComponent10060 = memo(function HeavyComponent10060({ config }: HeavyProps10060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10060.displayName = 'HeavyComponent10060';
export default HeavyComponent10060;
