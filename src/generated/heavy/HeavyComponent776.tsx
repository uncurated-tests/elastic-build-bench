'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly776<T> = T extends (infer U)[]
  ? DeepReadonlyArray776<U>
  : T extends object
  ? DeepReadonlyObject776<T>
  : T;

interface DeepReadonlyArray776<T> extends ReadonlyArray<DeepReadonly776<T>> {}

type DeepReadonlyObject776<T> = {
  readonly [P in keyof T]: DeepReadonly776<T[P]>;
};

type UnionToIntersection776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf776<T> = UnionToIntersection776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push776<T extends unknown[], V> = [...T, V];

type TuplifyUnion776<T, L = LastOf776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push776<TuplifyUnion776<Exclude<T, L>>, L>;

type DeepPartial776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial776<T[P]> }
  : T;

type Paths776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join776<K, Paths776<T[K], Prev776[D]>> : never }[keyof T]
  : never;

type Prev776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig776 {
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

type ConfigPaths776 = Paths776<NestedConfig776>;

interface HeavyProps776 {
  config: DeepPartial776<NestedConfig776>;
  path?: ConfigPaths776;
}

const HeavyComponent776 = memo(function HeavyComponent776({ config }: HeavyProps776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent776.displayName = 'HeavyComponent776';
export default HeavyComponent776;
