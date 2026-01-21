'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9014<T> = T extends (infer U)[]
  ? DeepReadonlyArray9014<U>
  : T extends object
  ? DeepReadonlyObject9014<T>
  : T;

interface DeepReadonlyArray9014<T> extends ReadonlyArray<DeepReadonly9014<T>> {}

type DeepReadonlyObject9014<T> = {
  readonly [P in keyof T]: DeepReadonly9014<T[P]>;
};

type UnionToIntersection9014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9014<T> = UnionToIntersection9014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9014<T extends unknown[], V> = [...T, V];

type TuplifyUnion9014<T, L = LastOf9014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9014<TuplifyUnion9014<Exclude<T, L>>, L>;

type DeepPartial9014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9014<T[P]> }
  : T;

type Paths9014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9014<K, Paths9014<T[K], Prev9014[D]>> : never }[keyof T]
  : never;

type Prev9014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9014 {
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

type ConfigPaths9014 = Paths9014<NestedConfig9014>;

interface HeavyProps9014 {
  config: DeepPartial9014<NestedConfig9014>;
  path?: ConfigPaths9014;
}

const HeavyComponent9014 = memo(function HeavyComponent9014({ config }: HeavyProps9014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9014.displayName = 'HeavyComponent9014';
export default HeavyComponent9014;
