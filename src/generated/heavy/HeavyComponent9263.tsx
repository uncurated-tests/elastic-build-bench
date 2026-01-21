'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9263<T> = T extends (infer U)[]
  ? DeepReadonlyArray9263<U>
  : T extends object
  ? DeepReadonlyObject9263<T>
  : T;

interface DeepReadonlyArray9263<T> extends ReadonlyArray<DeepReadonly9263<T>> {}

type DeepReadonlyObject9263<T> = {
  readonly [P in keyof T]: DeepReadonly9263<T[P]>;
};

type UnionToIntersection9263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9263<T> = UnionToIntersection9263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9263<T extends unknown[], V> = [...T, V];

type TuplifyUnion9263<T, L = LastOf9263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9263<TuplifyUnion9263<Exclude<T, L>>, L>;

type DeepPartial9263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9263<T[P]> }
  : T;

type Paths9263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9263<K, Paths9263<T[K], Prev9263[D]>> : never }[keyof T]
  : never;

type Prev9263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9263 {
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

type ConfigPaths9263 = Paths9263<NestedConfig9263>;

interface HeavyProps9263 {
  config: DeepPartial9263<NestedConfig9263>;
  path?: ConfigPaths9263;
}

const HeavyComponent9263 = memo(function HeavyComponent9263({ config }: HeavyProps9263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9263.displayName = 'HeavyComponent9263';
export default HeavyComponent9263;
