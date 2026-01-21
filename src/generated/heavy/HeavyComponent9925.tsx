'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9925<T> = T extends (infer U)[]
  ? DeepReadonlyArray9925<U>
  : T extends object
  ? DeepReadonlyObject9925<T>
  : T;

interface DeepReadonlyArray9925<T> extends ReadonlyArray<DeepReadonly9925<T>> {}

type DeepReadonlyObject9925<T> = {
  readonly [P in keyof T]: DeepReadonly9925<T[P]>;
};

type UnionToIntersection9925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9925<T> = UnionToIntersection9925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9925<T extends unknown[], V> = [...T, V];

type TuplifyUnion9925<T, L = LastOf9925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9925<TuplifyUnion9925<Exclude<T, L>>, L>;

type DeepPartial9925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9925<T[P]> }
  : T;

type Paths9925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9925<K, Paths9925<T[K], Prev9925[D]>> : never }[keyof T]
  : never;

type Prev9925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9925 {
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

type ConfigPaths9925 = Paths9925<NestedConfig9925>;

interface HeavyProps9925 {
  config: DeepPartial9925<NestedConfig9925>;
  path?: ConfigPaths9925;
}

const HeavyComponent9925 = memo(function HeavyComponent9925({ config }: HeavyProps9925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9925.displayName = 'HeavyComponent9925';
export default HeavyComponent9925;
