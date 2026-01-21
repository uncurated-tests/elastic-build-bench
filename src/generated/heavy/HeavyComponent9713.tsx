'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9713<T> = T extends (infer U)[]
  ? DeepReadonlyArray9713<U>
  : T extends object
  ? DeepReadonlyObject9713<T>
  : T;

interface DeepReadonlyArray9713<T> extends ReadonlyArray<DeepReadonly9713<T>> {}

type DeepReadonlyObject9713<T> = {
  readonly [P in keyof T]: DeepReadonly9713<T[P]>;
};

type UnionToIntersection9713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9713<T> = UnionToIntersection9713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9713<T extends unknown[], V> = [...T, V];

type TuplifyUnion9713<T, L = LastOf9713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9713<TuplifyUnion9713<Exclude<T, L>>, L>;

type DeepPartial9713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9713<T[P]> }
  : T;

type Paths9713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9713<K, Paths9713<T[K], Prev9713[D]>> : never }[keyof T]
  : never;

type Prev9713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9713 {
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

type ConfigPaths9713 = Paths9713<NestedConfig9713>;

interface HeavyProps9713 {
  config: DeepPartial9713<NestedConfig9713>;
  path?: ConfigPaths9713;
}

const HeavyComponent9713 = memo(function HeavyComponent9713({ config }: HeavyProps9713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9713.displayName = 'HeavyComponent9713';
export default HeavyComponent9713;
