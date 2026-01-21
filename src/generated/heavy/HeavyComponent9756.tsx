'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9756<T> = T extends (infer U)[]
  ? DeepReadonlyArray9756<U>
  : T extends object
  ? DeepReadonlyObject9756<T>
  : T;

interface DeepReadonlyArray9756<T> extends ReadonlyArray<DeepReadonly9756<T>> {}

type DeepReadonlyObject9756<T> = {
  readonly [P in keyof T]: DeepReadonly9756<T[P]>;
};

type UnionToIntersection9756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9756<T> = UnionToIntersection9756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9756<T extends unknown[], V> = [...T, V];

type TuplifyUnion9756<T, L = LastOf9756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9756<TuplifyUnion9756<Exclude<T, L>>, L>;

type DeepPartial9756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9756<T[P]> }
  : T;

type Paths9756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9756<K, Paths9756<T[K], Prev9756[D]>> : never }[keyof T]
  : never;

type Prev9756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9756 {
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

type ConfigPaths9756 = Paths9756<NestedConfig9756>;

interface HeavyProps9756 {
  config: DeepPartial9756<NestedConfig9756>;
  path?: ConfigPaths9756;
}

const HeavyComponent9756 = memo(function HeavyComponent9756({ config }: HeavyProps9756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9756.displayName = 'HeavyComponent9756';
export default HeavyComponent9756;
