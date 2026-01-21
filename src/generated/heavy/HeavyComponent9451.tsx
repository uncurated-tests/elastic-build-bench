'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9451<T> = T extends (infer U)[]
  ? DeepReadonlyArray9451<U>
  : T extends object
  ? DeepReadonlyObject9451<T>
  : T;

interface DeepReadonlyArray9451<T> extends ReadonlyArray<DeepReadonly9451<T>> {}

type DeepReadonlyObject9451<T> = {
  readonly [P in keyof T]: DeepReadonly9451<T[P]>;
};

type UnionToIntersection9451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9451<T> = UnionToIntersection9451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9451<T extends unknown[], V> = [...T, V];

type TuplifyUnion9451<T, L = LastOf9451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9451<TuplifyUnion9451<Exclude<T, L>>, L>;

type DeepPartial9451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9451<T[P]> }
  : T;

type Paths9451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9451<K, Paths9451<T[K], Prev9451[D]>> : never }[keyof T]
  : never;

type Prev9451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9451 {
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

type ConfigPaths9451 = Paths9451<NestedConfig9451>;

interface HeavyProps9451 {
  config: DeepPartial9451<NestedConfig9451>;
  path?: ConfigPaths9451;
}

const HeavyComponent9451 = memo(function HeavyComponent9451({ config }: HeavyProps9451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9451.displayName = 'HeavyComponent9451';
export default HeavyComponent9451;
