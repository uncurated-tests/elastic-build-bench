'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9782<T> = T extends (infer U)[]
  ? DeepReadonlyArray9782<U>
  : T extends object
  ? DeepReadonlyObject9782<T>
  : T;

interface DeepReadonlyArray9782<T> extends ReadonlyArray<DeepReadonly9782<T>> {}

type DeepReadonlyObject9782<T> = {
  readonly [P in keyof T]: DeepReadonly9782<T[P]>;
};

type UnionToIntersection9782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9782<T> = UnionToIntersection9782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9782<T extends unknown[], V> = [...T, V];

type TuplifyUnion9782<T, L = LastOf9782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9782<TuplifyUnion9782<Exclude<T, L>>, L>;

type DeepPartial9782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9782<T[P]> }
  : T;

type Paths9782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9782<K, Paths9782<T[K], Prev9782[D]>> : never }[keyof T]
  : never;

type Prev9782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9782 {
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

type ConfigPaths9782 = Paths9782<NestedConfig9782>;

interface HeavyProps9782 {
  config: DeepPartial9782<NestedConfig9782>;
  path?: ConfigPaths9782;
}

const HeavyComponent9782 = memo(function HeavyComponent9782({ config }: HeavyProps9782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9782.displayName = 'HeavyComponent9782';
export default HeavyComponent9782;
