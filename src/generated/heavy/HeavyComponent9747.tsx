'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9747<T> = T extends (infer U)[]
  ? DeepReadonlyArray9747<U>
  : T extends object
  ? DeepReadonlyObject9747<T>
  : T;

interface DeepReadonlyArray9747<T> extends ReadonlyArray<DeepReadonly9747<T>> {}

type DeepReadonlyObject9747<T> = {
  readonly [P in keyof T]: DeepReadonly9747<T[P]>;
};

type UnionToIntersection9747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9747<T> = UnionToIntersection9747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9747<T extends unknown[], V> = [...T, V];

type TuplifyUnion9747<T, L = LastOf9747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9747<TuplifyUnion9747<Exclude<T, L>>, L>;

type DeepPartial9747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9747<T[P]> }
  : T;

type Paths9747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9747<K, Paths9747<T[K], Prev9747[D]>> : never }[keyof T]
  : never;

type Prev9747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9747 {
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

type ConfigPaths9747 = Paths9747<NestedConfig9747>;

interface HeavyProps9747 {
  config: DeepPartial9747<NestedConfig9747>;
  path?: ConfigPaths9747;
}

const HeavyComponent9747 = memo(function HeavyComponent9747({ config }: HeavyProps9747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9747.displayName = 'HeavyComponent9747';
export default HeavyComponent9747;
