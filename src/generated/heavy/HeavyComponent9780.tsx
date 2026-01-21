'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9780<T> = T extends (infer U)[]
  ? DeepReadonlyArray9780<U>
  : T extends object
  ? DeepReadonlyObject9780<T>
  : T;

interface DeepReadonlyArray9780<T> extends ReadonlyArray<DeepReadonly9780<T>> {}

type DeepReadonlyObject9780<T> = {
  readonly [P in keyof T]: DeepReadonly9780<T[P]>;
};

type UnionToIntersection9780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9780<T> = UnionToIntersection9780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9780<T extends unknown[], V> = [...T, V];

type TuplifyUnion9780<T, L = LastOf9780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9780<TuplifyUnion9780<Exclude<T, L>>, L>;

type DeepPartial9780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9780<T[P]> }
  : T;

type Paths9780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9780<K, Paths9780<T[K], Prev9780[D]>> : never }[keyof T]
  : never;

type Prev9780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9780 {
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

type ConfigPaths9780 = Paths9780<NestedConfig9780>;

interface HeavyProps9780 {
  config: DeepPartial9780<NestedConfig9780>;
  path?: ConfigPaths9780;
}

const HeavyComponent9780 = memo(function HeavyComponent9780({ config }: HeavyProps9780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9780.displayName = 'HeavyComponent9780';
export default HeavyComponent9780;
