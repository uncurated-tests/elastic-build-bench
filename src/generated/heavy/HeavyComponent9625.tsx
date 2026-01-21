'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9625<T> = T extends (infer U)[]
  ? DeepReadonlyArray9625<U>
  : T extends object
  ? DeepReadonlyObject9625<T>
  : T;

interface DeepReadonlyArray9625<T> extends ReadonlyArray<DeepReadonly9625<T>> {}

type DeepReadonlyObject9625<T> = {
  readonly [P in keyof T]: DeepReadonly9625<T[P]>;
};

type UnionToIntersection9625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9625<T> = UnionToIntersection9625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9625<T extends unknown[], V> = [...T, V];

type TuplifyUnion9625<T, L = LastOf9625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9625<TuplifyUnion9625<Exclude<T, L>>, L>;

type DeepPartial9625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9625<T[P]> }
  : T;

type Paths9625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9625<K, Paths9625<T[K], Prev9625[D]>> : never }[keyof T]
  : never;

type Prev9625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9625 {
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

type ConfigPaths9625 = Paths9625<NestedConfig9625>;

interface HeavyProps9625 {
  config: DeepPartial9625<NestedConfig9625>;
  path?: ConfigPaths9625;
}

const HeavyComponent9625 = memo(function HeavyComponent9625({ config }: HeavyProps9625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9625.displayName = 'HeavyComponent9625';
export default HeavyComponent9625;
