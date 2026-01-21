'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9498<T> = T extends (infer U)[]
  ? DeepReadonlyArray9498<U>
  : T extends object
  ? DeepReadonlyObject9498<T>
  : T;

interface DeepReadonlyArray9498<T> extends ReadonlyArray<DeepReadonly9498<T>> {}

type DeepReadonlyObject9498<T> = {
  readonly [P in keyof T]: DeepReadonly9498<T[P]>;
};

type UnionToIntersection9498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9498<T> = UnionToIntersection9498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9498<T extends unknown[], V> = [...T, V];

type TuplifyUnion9498<T, L = LastOf9498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9498<TuplifyUnion9498<Exclude<T, L>>, L>;

type DeepPartial9498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9498<T[P]> }
  : T;

type Paths9498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9498<K, Paths9498<T[K], Prev9498[D]>> : never }[keyof T]
  : never;

type Prev9498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9498 {
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

type ConfigPaths9498 = Paths9498<NestedConfig9498>;

interface HeavyProps9498 {
  config: DeepPartial9498<NestedConfig9498>;
  path?: ConfigPaths9498;
}

const HeavyComponent9498 = memo(function HeavyComponent9498({ config }: HeavyProps9498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9498.displayName = 'HeavyComponent9498';
export default HeavyComponent9498;
