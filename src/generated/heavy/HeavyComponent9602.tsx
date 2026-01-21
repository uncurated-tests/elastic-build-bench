'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9602<T> = T extends (infer U)[]
  ? DeepReadonlyArray9602<U>
  : T extends object
  ? DeepReadonlyObject9602<T>
  : T;

interface DeepReadonlyArray9602<T> extends ReadonlyArray<DeepReadonly9602<T>> {}

type DeepReadonlyObject9602<T> = {
  readonly [P in keyof T]: DeepReadonly9602<T[P]>;
};

type UnionToIntersection9602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9602<T> = UnionToIntersection9602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9602<T extends unknown[], V> = [...T, V];

type TuplifyUnion9602<T, L = LastOf9602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9602<TuplifyUnion9602<Exclude<T, L>>, L>;

type DeepPartial9602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9602<T[P]> }
  : T;

type Paths9602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9602<K, Paths9602<T[K], Prev9602[D]>> : never }[keyof T]
  : never;

type Prev9602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9602 {
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

type ConfigPaths9602 = Paths9602<NestedConfig9602>;

interface HeavyProps9602 {
  config: DeepPartial9602<NestedConfig9602>;
  path?: ConfigPaths9602;
}

const HeavyComponent9602 = memo(function HeavyComponent9602({ config }: HeavyProps9602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9602.displayName = 'HeavyComponent9602';
export default HeavyComponent9602;
