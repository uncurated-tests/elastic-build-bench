'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9980<T> = T extends (infer U)[]
  ? DeepReadonlyArray9980<U>
  : T extends object
  ? DeepReadonlyObject9980<T>
  : T;

interface DeepReadonlyArray9980<T> extends ReadonlyArray<DeepReadonly9980<T>> {}

type DeepReadonlyObject9980<T> = {
  readonly [P in keyof T]: DeepReadonly9980<T[P]>;
};

type UnionToIntersection9980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9980<T> = UnionToIntersection9980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9980<T extends unknown[], V> = [...T, V];

type TuplifyUnion9980<T, L = LastOf9980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9980<TuplifyUnion9980<Exclude<T, L>>, L>;

type DeepPartial9980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9980<T[P]> }
  : T;

type Paths9980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9980<K, Paths9980<T[K], Prev9980[D]>> : never }[keyof T]
  : never;

type Prev9980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9980 {
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

type ConfigPaths9980 = Paths9980<NestedConfig9980>;

interface HeavyProps9980 {
  config: DeepPartial9980<NestedConfig9980>;
  path?: ConfigPaths9980;
}

const HeavyComponent9980 = memo(function HeavyComponent9980({ config }: HeavyProps9980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9980.displayName = 'HeavyComponent9980';
export default HeavyComponent9980;
