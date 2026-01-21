'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9856<T> = T extends (infer U)[]
  ? DeepReadonlyArray9856<U>
  : T extends object
  ? DeepReadonlyObject9856<T>
  : T;

interface DeepReadonlyArray9856<T> extends ReadonlyArray<DeepReadonly9856<T>> {}

type DeepReadonlyObject9856<T> = {
  readonly [P in keyof T]: DeepReadonly9856<T[P]>;
};

type UnionToIntersection9856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9856<T> = UnionToIntersection9856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9856<T extends unknown[], V> = [...T, V];

type TuplifyUnion9856<T, L = LastOf9856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9856<TuplifyUnion9856<Exclude<T, L>>, L>;

type DeepPartial9856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9856<T[P]> }
  : T;

type Paths9856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9856<K, Paths9856<T[K], Prev9856[D]>> : never }[keyof T]
  : never;

type Prev9856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9856 {
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

type ConfigPaths9856 = Paths9856<NestedConfig9856>;

interface HeavyProps9856 {
  config: DeepPartial9856<NestedConfig9856>;
  path?: ConfigPaths9856;
}

const HeavyComponent9856 = memo(function HeavyComponent9856({ config }: HeavyProps9856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9856.displayName = 'HeavyComponent9856';
export default HeavyComponent9856;
