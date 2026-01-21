'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12423<T> = T extends (infer U)[]
  ? DeepReadonlyArray12423<U>
  : T extends object
  ? DeepReadonlyObject12423<T>
  : T;

interface DeepReadonlyArray12423<T> extends ReadonlyArray<DeepReadonly12423<T>> {}

type DeepReadonlyObject12423<T> = {
  readonly [P in keyof T]: DeepReadonly12423<T[P]>;
};

type UnionToIntersection12423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12423<T> = UnionToIntersection12423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12423<T extends unknown[], V> = [...T, V];

type TuplifyUnion12423<T, L = LastOf12423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12423<TuplifyUnion12423<Exclude<T, L>>, L>;

type DeepPartial12423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12423<T[P]> }
  : T;

type Paths12423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12423<K, Paths12423<T[K], Prev12423[D]>> : never }[keyof T]
  : never;

type Prev12423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12423 {
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

type ConfigPaths12423 = Paths12423<NestedConfig12423>;

interface HeavyProps12423 {
  config: DeepPartial12423<NestedConfig12423>;
  path?: ConfigPaths12423;
}

const HeavyComponent12423 = memo(function HeavyComponent12423({ config }: HeavyProps12423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12423.displayName = 'HeavyComponent12423';
export default HeavyComponent12423;
