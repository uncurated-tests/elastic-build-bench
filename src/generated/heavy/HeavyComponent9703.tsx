'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9703<T> = T extends (infer U)[]
  ? DeepReadonlyArray9703<U>
  : T extends object
  ? DeepReadonlyObject9703<T>
  : T;

interface DeepReadonlyArray9703<T> extends ReadonlyArray<DeepReadonly9703<T>> {}

type DeepReadonlyObject9703<T> = {
  readonly [P in keyof T]: DeepReadonly9703<T[P]>;
};

type UnionToIntersection9703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9703<T> = UnionToIntersection9703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9703<T extends unknown[], V> = [...T, V];

type TuplifyUnion9703<T, L = LastOf9703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9703<TuplifyUnion9703<Exclude<T, L>>, L>;

type DeepPartial9703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9703<T[P]> }
  : T;

type Paths9703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9703<K, Paths9703<T[K], Prev9703[D]>> : never }[keyof T]
  : never;

type Prev9703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9703 {
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

type ConfigPaths9703 = Paths9703<NestedConfig9703>;

interface HeavyProps9703 {
  config: DeepPartial9703<NestedConfig9703>;
  path?: ConfigPaths9703;
}

const HeavyComponent9703 = memo(function HeavyComponent9703({ config }: HeavyProps9703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9703.displayName = 'HeavyComponent9703';
export default HeavyComponent9703;
