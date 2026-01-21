'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9964<T> = T extends (infer U)[]
  ? DeepReadonlyArray9964<U>
  : T extends object
  ? DeepReadonlyObject9964<T>
  : T;

interface DeepReadonlyArray9964<T> extends ReadonlyArray<DeepReadonly9964<T>> {}

type DeepReadonlyObject9964<T> = {
  readonly [P in keyof T]: DeepReadonly9964<T[P]>;
};

type UnionToIntersection9964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9964<T> = UnionToIntersection9964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9964<T extends unknown[], V> = [...T, V];

type TuplifyUnion9964<T, L = LastOf9964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9964<TuplifyUnion9964<Exclude<T, L>>, L>;

type DeepPartial9964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9964<T[P]> }
  : T;

type Paths9964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9964<K, Paths9964<T[K], Prev9964[D]>> : never }[keyof T]
  : never;

type Prev9964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9964 {
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

type ConfigPaths9964 = Paths9964<NestedConfig9964>;

interface HeavyProps9964 {
  config: DeepPartial9964<NestedConfig9964>;
  path?: ConfigPaths9964;
}

const HeavyComponent9964 = memo(function HeavyComponent9964({ config }: HeavyProps9964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9964.displayName = 'HeavyComponent9964';
export default HeavyComponent9964;
