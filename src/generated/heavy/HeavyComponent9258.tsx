'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9258<T> = T extends (infer U)[]
  ? DeepReadonlyArray9258<U>
  : T extends object
  ? DeepReadonlyObject9258<T>
  : T;

interface DeepReadonlyArray9258<T> extends ReadonlyArray<DeepReadonly9258<T>> {}

type DeepReadonlyObject9258<T> = {
  readonly [P in keyof T]: DeepReadonly9258<T[P]>;
};

type UnionToIntersection9258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9258<T> = UnionToIntersection9258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9258<T extends unknown[], V> = [...T, V];

type TuplifyUnion9258<T, L = LastOf9258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9258<TuplifyUnion9258<Exclude<T, L>>, L>;

type DeepPartial9258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9258<T[P]> }
  : T;

type Paths9258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9258<K, Paths9258<T[K], Prev9258[D]>> : never }[keyof T]
  : never;

type Prev9258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9258 {
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

type ConfigPaths9258 = Paths9258<NestedConfig9258>;

interface HeavyProps9258 {
  config: DeepPartial9258<NestedConfig9258>;
  path?: ConfigPaths9258;
}

const HeavyComponent9258 = memo(function HeavyComponent9258({ config }: HeavyProps9258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9258.displayName = 'HeavyComponent9258';
export default HeavyComponent9258;
