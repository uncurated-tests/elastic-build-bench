'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9017<T> = T extends (infer U)[]
  ? DeepReadonlyArray9017<U>
  : T extends object
  ? DeepReadonlyObject9017<T>
  : T;

interface DeepReadonlyArray9017<T> extends ReadonlyArray<DeepReadonly9017<T>> {}

type DeepReadonlyObject9017<T> = {
  readonly [P in keyof T]: DeepReadonly9017<T[P]>;
};

type UnionToIntersection9017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9017<T> = UnionToIntersection9017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9017<T extends unknown[], V> = [...T, V];

type TuplifyUnion9017<T, L = LastOf9017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9017<TuplifyUnion9017<Exclude<T, L>>, L>;

type DeepPartial9017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9017<T[P]> }
  : T;

type Paths9017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9017<K, Paths9017<T[K], Prev9017[D]>> : never }[keyof T]
  : never;

type Prev9017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9017 {
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

type ConfigPaths9017 = Paths9017<NestedConfig9017>;

interface HeavyProps9017 {
  config: DeepPartial9017<NestedConfig9017>;
  path?: ConfigPaths9017;
}

const HeavyComponent9017 = memo(function HeavyComponent9017({ config }: HeavyProps9017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9017.displayName = 'HeavyComponent9017';
export default HeavyComponent9017;
