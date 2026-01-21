'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9760<T> = T extends (infer U)[]
  ? DeepReadonlyArray9760<U>
  : T extends object
  ? DeepReadonlyObject9760<T>
  : T;

interface DeepReadonlyArray9760<T> extends ReadonlyArray<DeepReadonly9760<T>> {}

type DeepReadonlyObject9760<T> = {
  readonly [P in keyof T]: DeepReadonly9760<T[P]>;
};

type UnionToIntersection9760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9760<T> = UnionToIntersection9760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9760<T extends unknown[], V> = [...T, V];

type TuplifyUnion9760<T, L = LastOf9760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9760<TuplifyUnion9760<Exclude<T, L>>, L>;

type DeepPartial9760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9760<T[P]> }
  : T;

type Paths9760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9760<K, Paths9760<T[K], Prev9760[D]>> : never }[keyof T]
  : never;

type Prev9760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9760 {
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

type ConfigPaths9760 = Paths9760<NestedConfig9760>;

interface HeavyProps9760 {
  config: DeepPartial9760<NestedConfig9760>;
  path?: ConfigPaths9760;
}

const HeavyComponent9760 = memo(function HeavyComponent9760({ config }: HeavyProps9760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9760.displayName = 'HeavyComponent9760';
export default HeavyComponent9760;
