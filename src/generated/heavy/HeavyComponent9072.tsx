'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9072<T> = T extends (infer U)[]
  ? DeepReadonlyArray9072<U>
  : T extends object
  ? DeepReadonlyObject9072<T>
  : T;

interface DeepReadonlyArray9072<T> extends ReadonlyArray<DeepReadonly9072<T>> {}

type DeepReadonlyObject9072<T> = {
  readonly [P in keyof T]: DeepReadonly9072<T[P]>;
};

type UnionToIntersection9072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9072<T> = UnionToIntersection9072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9072<T extends unknown[], V> = [...T, V];

type TuplifyUnion9072<T, L = LastOf9072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9072<TuplifyUnion9072<Exclude<T, L>>, L>;

type DeepPartial9072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9072<T[P]> }
  : T;

type Paths9072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9072<K, Paths9072<T[K], Prev9072[D]>> : never }[keyof T]
  : never;

type Prev9072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9072 {
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

type ConfigPaths9072 = Paths9072<NestedConfig9072>;

interface HeavyProps9072 {
  config: DeepPartial9072<NestedConfig9072>;
  path?: ConfigPaths9072;
}

const HeavyComponent9072 = memo(function HeavyComponent9072({ config }: HeavyProps9072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9072.displayName = 'HeavyComponent9072';
export default HeavyComponent9072;
