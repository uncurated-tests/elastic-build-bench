'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9773<T> = T extends (infer U)[]
  ? DeepReadonlyArray9773<U>
  : T extends object
  ? DeepReadonlyObject9773<T>
  : T;

interface DeepReadonlyArray9773<T> extends ReadonlyArray<DeepReadonly9773<T>> {}

type DeepReadonlyObject9773<T> = {
  readonly [P in keyof T]: DeepReadonly9773<T[P]>;
};

type UnionToIntersection9773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9773<T> = UnionToIntersection9773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9773<T extends unknown[], V> = [...T, V];

type TuplifyUnion9773<T, L = LastOf9773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9773<TuplifyUnion9773<Exclude<T, L>>, L>;

type DeepPartial9773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9773<T[P]> }
  : T;

type Paths9773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9773<K, Paths9773<T[K], Prev9773[D]>> : never }[keyof T]
  : never;

type Prev9773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9773 {
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

type ConfigPaths9773 = Paths9773<NestedConfig9773>;

interface HeavyProps9773 {
  config: DeepPartial9773<NestedConfig9773>;
  path?: ConfigPaths9773;
}

const HeavyComponent9773 = memo(function HeavyComponent9773({ config }: HeavyProps9773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9773.displayName = 'HeavyComponent9773';
export default HeavyComponent9773;
