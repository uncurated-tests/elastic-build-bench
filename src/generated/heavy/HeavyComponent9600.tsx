'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9600<T> = T extends (infer U)[]
  ? DeepReadonlyArray9600<U>
  : T extends object
  ? DeepReadonlyObject9600<T>
  : T;

interface DeepReadonlyArray9600<T> extends ReadonlyArray<DeepReadonly9600<T>> {}

type DeepReadonlyObject9600<T> = {
  readonly [P in keyof T]: DeepReadonly9600<T[P]>;
};

type UnionToIntersection9600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9600<T> = UnionToIntersection9600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9600<T extends unknown[], V> = [...T, V];

type TuplifyUnion9600<T, L = LastOf9600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9600<TuplifyUnion9600<Exclude<T, L>>, L>;

type DeepPartial9600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9600<T[P]> }
  : T;

type Paths9600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9600<K, Paths9600<T[K], Prev9600[D]>> : never }[keyof T]
  : never;

type Prev9600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9600 {
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

type ConfigPaths9600 = Paths9600<NestedConfig9600>;

interface HeavyProps9600 {
  config: DeepPartial9600<NestedConfig9600>;
  path?: ConfigPaths9600;
}

const HeavyComponent9600 = memo(function HeavyComponent9600({ config }: HeavyProps9600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9600.displayName = 'HeavyComponent9600';
export default HeavyComponent9600;
