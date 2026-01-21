'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9260<T> = T extends (infer U)[]
  ? DeepReadonlyArray9260<U>
  : T extends object
  ? DeepReadonlyObject9260<T>
  : T;

interface DeepReadonlyArray9260<T> extends ReadonlyArray<DeepReadonly9260<T>> {}

type DeepReadonlyObject9260<T> = {
  readonly [P in keyof T]: DeepReadonly9260<T[P]>;
};

type UnionToIntersection9260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9260<T> = UnionToIntersection9260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9260<T extends unknown[], V> = [...T, V];

type TuplifyUnion9260<T, L = LastOf9260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9260<TuplifyUnion9260<Exclude<T, L>>, L>;

type DeepPartial9260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9260<T[P]> }
  : T;

type Paths9260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9260<K, Paths9260<T[K], Prev9260[D]>> : never }[keyof T]
  : never;

type Prev9260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9260 {
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

type ConfigPaths9260 = Paths9260<NestedConfig9260>;

interface HeavyProps9260 {
  config: DeepPartial9260<NestedConfig9260>;
  path?: ConfigPaths9260;
}

const HeavyComponent9260 = memo(function HeavyComponent9260({ config }: HeavyProps9260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9260.displayName = 'HeavyComponent9260';
export default HeavyComponent9260;
