'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9148<T> = T extends (infer U)[]
  ? DeepReadonlyArray9148<U>
  : T extends object
  ? DeepReadonlyObject9148<T>
  : T;

interface DeepReadonlyArray9148<T> extends ReadonlyArray<DeepReadonly9148<T>> {}

type DeepReadonlyObject9148<T> = {
  readonly [P in keyof T]: DeepReadonly9148<T[P]>;
};

type UnionToIntersection9148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9148<T> = UnionToIntersection9148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9148<T extends unknown[], V> = [...T, V];

type TuplifyUnion9148<T, L = LastOf9148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9148<TuplifyUnion9148<Exclude<T, L>>, L>;

type DeepPartial9148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9148<T[P]> }
  : T;

type Paths9148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9148<K, Paths9148<T[K], Prev9148[D]>> : never }[keyof T]
  : never;

type Prev9148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9148 {
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

type ConfigPaths9148 = Paths9148<NestedConfig9148>;

interface HeavyProps9148 {
  config: DeepPartial9148<NestedConfig9148>;
  path?: ConfigPaths9148;
}

const HeavyComponent9148 = memo(function HeavyComponent9148({ config }: HeavyProps9148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9148.displayName = 'HeavyComponent9148';
export default HeavyComponent9148;
