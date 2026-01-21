'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9857<T> = T extends (infer U)[]
  ? DeepReadonlyArray9857<U>
  : T extends object
  ? DeepReadonlyObject9857<T>
  : T;

interface DeepReadonlyArray9857<T> extends ReadonlyArray<DeepReadonly9857<T>> {}

type DeepReadonlyObject9857<T> = {
  readonly [P in keyof T]: DeepReadonly9857<T[P]>;
};

type UnionToIntersection9857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9857<T> = UnionToIntersection9857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9857<T extends unknown[], V> = [...T, V];

type TuplifyUnion9857<T, L = LastOf9857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9857<TuplifyUnion9857<Exclude<T, L>>, L>;

type DeepPartial9857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9857<T[P]> }
  : T;

type Paths9857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9857<K, Paths9857<T[K], Prev9857[D]>> : never }[keyof T]
  : never;

type Prev9857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9857 {
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

type ConfigPaths9857 = Paths9857<NestedConfig9857>;

interface HeavyProps9857 {
  config: DeepPartial9857<NestedConfig9857>;
  path?: ConfigPaths9857;
}

const HeavyComponent9857 = memo(function HeavyComponent9857({ config }: HeavyProps9857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9857.displayName = 'HeavyComponent9857';
export default HeavyComponent9857;
