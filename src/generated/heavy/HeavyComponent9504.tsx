'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9504<T> = T extends (infer U)[]
  ? DeepReadonlyArray9504<U>
  : T extends object
  ? DeepReadonlyObject9504<T>
  : T;

interface DeepReadonlyArray9504<T> extends ReadonlyArray<DeepReadonly9504<T>> {}

type DeepReadonlyObject9504<T> = {
  readonly [P in keyof T]: DeepReadonly9504<T[P]>;
};

type UnionToIntersection9504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9504<T> = UnionToIntersection9504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9504<T extends unknown[], V> = [...T, V];

type TuplifyUnion9504<T, L = LastOf9504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9504<TuplifyUnion9504<Exclude<T, L>>, L>;

type DeepPartial9504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9504<T[P]> }
  : T;

type Paths9504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9504<K, Paths9504<T[K], Prev9504[D]>> : never }[keyof T]
  : never;

type Prev9504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9504 {
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

type ConfigPaths9504 = Paths9504<NestedConfig9504>;

interface HeavyProps9504 {
  config: DeepPartial9504<NestedConfig9504>;
  path?: ConfigPaths9504;
}

const HeavyComponent9504 = memo(function HeavyComponent9504({ config }: HeavyProps9504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9504.displayName = 'HeavyComponent9504';
export default HeavyComponent9504;
