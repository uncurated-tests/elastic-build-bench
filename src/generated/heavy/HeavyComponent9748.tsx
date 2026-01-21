'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9748<T> = T extends (infer U)[]
  ? DeepReadonlyArray9748<U>
  : T extends object
  ? DeepReadonlyObject9748<T>
  : T;

interface DeepReadonlyArray9748<T> extends ReadonlyArray<DeepReadonly9748<T>> {}

type DeepReadonlyObject9748<T> = {
  readonly [P in keyof T]: DeepReadonly9748<T[P]>;
};

type UnionToIntersection9748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9748<T> = UnionToIntersection9748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9748<T extends unknown[], V> = [...T, V];

type TuplifyUnion9748<T, L = LastOf9748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9748<TuplifyUnion9748<Exclude<T, L>>, L>;

type DeepPartial9748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9748<T[P]> }
  : T;

type Paths9748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9748<K, Paths9748<T[K], Prev9748[D]>> : never }[keyof T]
  : never;

type Prev9748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9748 {
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

type ConfigPaths9748 = Paths9748<NestedConfig9748>;

interface HeavyProps9748 {
  config: DeepPartial9748<NestedConfig9748>;
  path?: ConfigPaths9748;
}

const HeavyComponent9748 = memo(function HeavyComponent9748({ config }: HeavyProps9748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9748.displayName = 'HeavyComponent9748';
export default HeavyComponent9748;
