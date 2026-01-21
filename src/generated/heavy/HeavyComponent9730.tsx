'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9730<T> = T extends (infer U)[]
  ? DeepReadonlyArray9730<U>
  : T extends object
  ? DeepReadonlyObject9730<T>
  : T;

interface DeepReadonlyArray9730<T> extends ReadonlyArray<DeepReadonly9730<T>> {}

type DeepReadonlyObject9730<T> = {
  readonly [P in keyof T]: DeepReadonly9730<T[P]>;
};

type UnionToIntersection9730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9730<T> = UnionToIntersection9730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9730<T extends unknown[], V> = [...T, V];

type TuplifyUnion9730<T, L = LastOf9730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9730<TuplifyUnion9730<Exclude<T, L>>, L>;

type DeepPartial9730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9730<T[P]> }
  : T;

type Paths9730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9730<K, Paths9730<T[K], Prev9730[D]>> : never }[keyof T]
  : never;

type Prev9730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9730 {
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

type ConfigPaths9730 = Paths9730<NestedConfig9730>;

interface HeavyProps9730 {
  config: DeepPartial9730<NestedConfig9730>;
  path?: ConfigPaths9730;
}

const HeavyComponent9730 = memo(function HeavyComponent9730({ config }: HeavyProps9730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9730.displayName = 'HeavyComponent9730';
export default HeavyComponent9730;
