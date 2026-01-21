'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9360<T> = T extends (infer U)[]
  ? DeepReadonlyArray9360<U>
  : T extends object
  ? DeepReadonlyObject9360<T>
  : T;

interface DeepReadonlyArray9360<T> extends ReadonlyArray<DeepReadonly9360<T>> {}

type DeepReadonlyObject9360<T> = {
  readonly [P in keyof T]: DeepReadonly9360<T[P]>;
};

type UnionToIntersection9360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9360<T> = UnionToIntersection9360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9360<T extends unknown[], V> = [...T, V];

type TuplifyUnion9360<T, L = LastOf9360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9360<TuplifyUnion9360<Exclude<T, L>>, L>;

type DeepPartial9360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9360<T[P]> }
  : T;

type Paths9360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9360<K, Paths9360<T[K], Prev9360[D]>> : never }[keyof T]
  : never;

type Prev9360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9360 {
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

type ConfigPaths9360 = Paths9360<NestedConfig9360>;

interface HeavyProps9360 {
  config: DeepPartial9360<NestedConfig9360>;
  path?: ConfigPaths9360;
}

const HeavyComponent9360 = memo(function HeavyComponent9360({ config }: HeavyProps9360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9360.displayName = 'HeavyComponent9360';
export default HeavyComponent9360;
