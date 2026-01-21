'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9373<T> = T extends (infer U)[]
  ? DeepReadonlyArray9373<U>
  : T extends object
  ? DeepReadonlyObject9373<T>
  : T;

interface DeepReadonlyArray9373<T> extends ReadonlyArray<DeepReadonly9373<T>> {}

type DeepReadonlyObject9373<T> = {
  readonly [P in keyof T]: DeepReadonly9373<T[P]>;
};

type UnionToIntersection9373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9373<T> = UnionToIntersection9373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9373<T extends unknown[], V> = [...T, V];

type TuplifyUnion9373<T, L = LastOf9373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9373<TuplifyUnion9373<Exclude<T, L>>, L>;

type DeepPartial9373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9373<T[P]> }
  : T;

type Paths9373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9373<K, Paths9373<T[K], Prev9373[D]>> : never }[keyof T]
  : never;

type Prev9373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9373 {
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

type ConfigPaths9373 = Paths9373<NestedConfig9373>;

interface HeavyProps9373 {
  config: DeepPartial9373<NestedConfig9373>;
  path?: ConfigPaths9373;
}

const HeavyComponent9373 = memo(function HeavyComponent9373({ config }: HeavyProps9373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9373.displayName = 'HeavyComponent9373';
export default HeavyComponent9373;
