'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9767<T> = T extends (infer U)[]
  ? DeepReadonlyArray9767<U>
  : T extends object
  ? DeepReadonlyObject9767<T>
  : T;

interface DeepReadonlyArray9767<T> extends ReadonlyArray<DeepReadonly9767<T>> {}

type DeepReadonlyObject9767<T> = {
  readonly [P in keyof T]: DeepReadonly9767<T[P]>;
};

type UnionToIntersection9767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9767<T> = UnionToIntersection9767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9767<T extends unknown[], V> = [...T, V];

type TuplifyUnion9767<T, L = LastOf9767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9767<TuplifyUnion9767<Exclude<T, L>>, L>;

type DeepPartial9767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9767<T[P]> }
  : T;

type Paths9767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9767<K, Paths9767<T[K], Prev9767[D]>> : never }[keyof T]
  : never;

type Prev9767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9767 {
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

type ConfigPaths9767 = Paths9767<NestedConfig9767>;

interface HeavyProps9767 {
  config: DeepPartial9767<NestedConfig9767>;
  path?: ConfigPaths9767;
}

const HeavyComponent9767 = memo(function HeavyComponent9767({ config }: HeavyProps9767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9767.displayName = 'HeavyComponent9767';
export default HeavyComponent9767;
