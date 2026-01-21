'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9487<T> = T extends (infer U)[]
  ? DeepReadonlyArray9487<U>
  : T extends object
  ? DeepReadonlyObject9487<T>
  : T;

interface DeepReadonlyArray9487<T> extends ReadonlyArray<DeepReadonly9487<T>> {}

type DeepReadonlyObject9487<T> = {
  readonly [P in keyof T]: DeepReadonly9487<T[P]>;
};

type UnionToIntersection9487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9487<T> = UnionToIntersection9487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9487<T extends unknown[], V> = [...T, V];

type TuplifyUnion9487<T, L = LastOf9487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9487<TuplifyUnion9487<Exclude<T, L>>, L>;

type DeepPartial9487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9487<T[P]> }
  : T;

type Paths9487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9487<K, Paths9487<T[K], Prev9487[D]>> : never }[keyof T]
  : never;

type Prev9487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9487 {
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

type ConfigPaths9487 = Paths9487<NestedConfig9487>;

interface HeavyProps9487 {
  config: DeepPartial9487<NestedConfig9487>;
  path?: ConfigPaths9487;
}

const HeavyComponent9487 = memo(function HeavyComponent9487({ config }: HeavyProps9487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9487.displayName = 'HeavyComponent9487';
export default HeavyComponent9487;
