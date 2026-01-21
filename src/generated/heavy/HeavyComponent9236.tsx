'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9236<T> = T extends (infer U)[]
  ? DeepReadonlyArray9236<U>
  : T extends object
  ? DeepReadonlyObject9236<T>
  : T;

interface DeepReadonlyArray9236<T> extends ReadonlyArray<DeepReadonly9236<T>> {}

type DeepReadonlyObject9236<T> = {
  readonly [P in keyof T]: DeepReadonly9236<T[P]>;
};

type UnionToIntersection9236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9236<T> = UnionToIntersection9236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9236<T extends unknown[], V> = [...T, V];

type TuplifyUnion9236<T, L = LastOf9236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9236<TuplifyUnion9236<Exclude<T, L>>, L>;

type DeepPartial9236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9236<T[P]> }
  : T;

type Paths9236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9236<K, Paths9236<T[K], Prev9236[D]>> : never }[keyof T]
  : never;

type Prev9236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9236 {
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

type ConfigPaths9236 = Paths9236<NestedConfig9236>;

interface HeavyProps9236 {
  config: DeepPartial9236<NestedConfig9236>;
  path?: ConfigPaths9236;
}

const HeavyComponent9236 = memo(function HeavyComponent9236({ config }: HeavyProps9236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9236.displayName = 'HeavyComponent9236';
export default HeavyComponent9236;
