'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9576<T> = T extends (infer U)[]
  ? DeepReadonlyArray9576<U>
  : T extends object
  ? DeepReadonlyObject9576<T>
  : T;

interface DeepReadonlyArray9576<T> extends ReadonlyArray<DeepReadonly9576<T>> {}

type DeepReadonlyObject9576<T> = {
  readonly [P in keyof T]: DeepReadonly9576<T[P]>;
};

type UnionToIntersection9576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9576<T> = UnionToIntersection9576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9576<T extends unknown[], V> = [...T, V];

type TuplifyUnion9576<T, L = LastOf9576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9576<TuplifyUnion9576<Exclude<T, L>>, L>;

type DeepPartial9576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9576<T[P]> }
  : T;

type Paths9576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9576<K, Paths9576<T[K], Prev9576[D]>> : never }[keyof T]
  : never;

type Prev9576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9576 {
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

type ConfigPaths9576 = Paths9576<NestedConfig9576>;

interface HeavyProps9576 {
  config: DeepPartial9576<NestedConfig9576>;
  path?: ConfigPaths9576;
}

const HeavyComponent9576 = memo(function HeavyComponent9576({ config }: HeavyProps9576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9576.displayName = 'HeavyComponent9576';
export default HeavyComponent9576;
