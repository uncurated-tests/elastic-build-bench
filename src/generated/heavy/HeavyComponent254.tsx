'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly254<T> = T extends (infer U)[]
  ? DeepReadonlyArray254<U>
  : T extends object
  ? DeepReadonlyObject254<T>
  : T;

interface DeepReadonlyArray254<T> extends ReadonlyArray<DeepReadonly254<T>> {}

type DeepReadonlyObject254<T> = {
  readonly [P in keyof T]: DeepReadonly254<T[P]>;
};

type UnionToIntersection254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf254<T> = UnionToIntersection254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push254<T extends unknown[], V> = [...T, V];

type TuplifyUnion254<T, L = LastOf254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push254<TuplifyUnion254<Exclude<T, L>>, L>;

type DeepPartial254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial254<T[P]> }
  : T;

type Paths254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join254<K, Paths254<T[K], Prev254[D]>> : never }[keyof T]
  : never;

type Prev254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig254 {
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

type ConfigPaths254 = Paths254<NestedConfig254>;

interface HeavyProps254 {
  config: DeepPartial254<NestedConfig254>;
  path?: ConfigPaths254;
}

const HeavyComponent254 = memo(function HeavyComponent254({ config }: HeavyProps254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent254.displayName = 'HeavyComponent254';
export default HeavyComponent254;
