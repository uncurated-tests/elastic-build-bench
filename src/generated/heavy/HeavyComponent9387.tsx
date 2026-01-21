'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9387<T> = T extends (infer U)[]
  ? DeepReadonlyArray9387<U>
  : T extends object
  ? DeepReadonlyObject9387<T>
  : T;

interface DeepReadonlyArray9387<T> extends ReadonlyArray<DeepReadonly9387<T>> {}

type DeepReadonlyObject9387<T> = {
  readonly [P in keyof T]: DeepReadonly9387<T[P]>;
};

type UnionToIntersection9387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9387<T> = UnionToIntersection9387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9387<T extends unknown[], V> = [...T, V];

type TuplifyUnion9387<T, L = LastOf9387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9387<TuplifyUnion9387<Exclude<T, L>>, L>;

type DeepPartial9387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9387<T[P]> }
  : T;

type Paths9387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9387<K, Paths9387<T[K], Prev9387[D]>> : never }[keyof T]
  : never;

type Prev9387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9387 {
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

type ConfigPaths9387 = Paths9387<NestedConfig9387>;

interface HeavyProps9387 {
  config: DeepPartial9387<NestedConfig9387>;
  path?: ConfigPaths9387;
}

const HeavyComponent9387 = memo(function HeavyComponent9387({ config }: HeavyProps9387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9387.displayName = 'HeavyComponent9387';
export default HeavyComponent9387;
